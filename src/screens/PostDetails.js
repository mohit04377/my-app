import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../components/CustomCard'
import LoadingComp from '../components/LoadingComp'

const PostDetails = ({ route }) => {
    const [postDetail, setPostDetail] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const { postId } = route?.params

    const getPostDetail = async () => {
        setLoading(true)
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        const response = await fetch(url);
        const result = await response.json()
        setPostDetail(result)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        getPostDetail()
    }, [])

    const { id, userId, title, body } = postDetail

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text style={styles.detailTitle}>Post Detail</Text>
                <CustomCard
                    title={title}
                    content={body}
                    userId={userId}
                />
            </View>
            <LoadingComp loading={loading} />
        </React.Fragment>
    )
}

export default PostDetails

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 40,
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    }
})