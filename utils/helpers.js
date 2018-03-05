import { Notifications, Permissions } from 'expo';
import { AsyncStorage, Alert } from 'react-native'

export function setNotificationForTomorrow() {
  AsyncStorage.getItem('notification')
    .then(data => JSON.parse(data))
    .then(hasNotification => {
      if (!hasNotification) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(18);
              tomorrow.setMinutes(15);

              Notifications.scheduleLocalNotificationAsync(
                {
                  title: 'Take a quiz!',
                  body: "Don't forget to take a quiz today"
                }, {
                  time: tomorrow,
                  repeat: 'minute',
                }
              );
              AsyncStorage.setItem('notification', JSON.stringify(true))
            }
          })

      }
    })
}

export function clearAllNotifications() {
  return AsyncStorage.removeItem('notification')
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
