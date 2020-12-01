import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps180379Navigator from '../features/Maps180379/navigator';
import Additem180378Navigator from '../features/Additem180378/navigator';
import Maps180374Navigator from '../features/Maps180374/navigator';
import UserProfile180370Navigator from '../features/UserProfile180370/navigator';
import Messaging1180347Navigator from '../features/Messaging1180347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps180379: { screen: Maps180379Navigator },
Additem180378: { screen: Additem180378Navigator },
Maps180374: { screen: Maps180374Navigator },
UserProfile180370: { screen: UserProfile180370Navigator },
Messaging1180347: { screen: Messaging1180347Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
