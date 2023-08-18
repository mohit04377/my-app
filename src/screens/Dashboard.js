import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../components/CustomCard'
import LoadingComp from '../components/LoadingComp'

const Dashboard = ({ navigation }) => {
  const [post, setPost] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getPosts = async () => {
    setLoading(true)
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url);
    const result = await response.json()
    setPost(result)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    getPosts()
  }, [])

  const handleCardPress = (item) => {
    // Handle card press
    navigation.navigate('PostDetails', {
      postId: item.id
    })
  };

  const renderItem = (item) => (
    <View style={styles.cardContainer}>
      <CustomCard
        title={item?.title}
        content={item?.body}
        id={item.id}
        onPress={() => handleCardPress(item)}
      />
    </View>
  )

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.allPostStyle}> All Post</Text>
        <FlatList
          data={post}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
      <LoadingComp loading={loading} />
    </React.Fragment>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginTop: 40,
  },
  allPostStyle:{
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10
  },
  cardContainer: {
    flex: 0.5,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
})