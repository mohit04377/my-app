import * as React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { theme } from '../core/theme';

const LoadingComp = ({ loading }) => (
    <React.Fragment>
        {
            loading ? (
                <View style={{ position: 'absolute', top: '50%', left: '40%', height: 60, width: 100, backgroundColor: 'white', paddingTop: 7 }}>
                    <ActivityIndicator size={"large"} animating={true} color={theme.colors.primary} />
                </View>
            ) : null
        }
    </React.Fragment>
);

export default LoadingComp;