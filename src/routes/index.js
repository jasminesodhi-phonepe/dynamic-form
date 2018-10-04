import {StackNavigator} from 'react-navigation';
import FormScreen from '../pages/index';
import QRScan from '../components/customQRScan';

const navigator = StackNavigator ({
    Form: {screen: FormScreen},
    QRScan: {screen: QRScan},
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#673AB7',
        },
    }
});

export default navigator;