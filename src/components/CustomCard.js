import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Paragraph } from 'react-native-paper';

const CustomCard = ({ title, content, onPress, userId, id }) => {
    return (
        <Card onPress={onPress} style={styles.cardContainer}>
            {
                userId ? (
                    <View style={styles.userIdStyle}>
                        <Text style={styles.userTextId}>User Id :</Text>
                        <Text style={styles.userTextValue}>{userId}</Text>
                    </View>
                ) : null
            }
            {
                id ? (
                    <View style={{
                        backgroundColor: 'yellow',
                        width: '18%',
                        padding: "1%"
                    }}>
                        <Text style={{ color: '#000', fontSize: 16 }}>Id : {id}</Text>
                    </View>
                ) : null
            }
            <Card.Title title={title} titleStyle={styles.cardTitleStyle} />
            <Card.Content>
                <Paragraph>{content}</Paragraph>
            </Card.Content>
        </Card>
    );
};

export default CustomCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4, // Add shadow
    },
    cardTitleStyle:{
        color: "#000",
        fontWeight: '800',
        fontSize: 18
    },
    userIdStyle: {
        flexDirection: 'row',
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    userTextId:{
        color: "#000",
        fontWeight: '800',
        fontSize: 18
    },
    userTextValue:{
        color: "#000",
        fontWeight: '800',
        fontSize: 18
    }
})
