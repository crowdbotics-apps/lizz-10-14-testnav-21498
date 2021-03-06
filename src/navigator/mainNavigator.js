import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2145193Navigator from '../features/BlankScreen2145193/navigator';
import BlankScreen1142785Navigator from '../features/BlankScreen1142785/navigator';
import BlankScreen0142784Navigator from '../features/BlankScreen0142784/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2145193: { screen: BlankScreen2145193Navigator },
BlankScreen1142785: { screen: BlankScreen1142785Navigator },
BlankScreen0142784: { screen: BlankScreen0142784Navigator },

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
