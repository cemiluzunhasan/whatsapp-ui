import { Status, Calls, Camera, Chats, Settings } from '../tabs';

export default [
  {
    name: 'Status',
    icon: 'ios-radio-button-off',
    component: Status
  },
  {
    name: 'Calls',
    icon: 'ios-call',
    component: Calls
  },
  {
    name: 'Camera',
    icon: 'ios-camera',
    component: Camera
  },
  {
    name: 'Chats',
    icon: 'ios-chatbubbles',
    component: Chats
  },
  {
    name: 'Settings',
    icon: 'ios-settings',
    component: Settings
  },
]