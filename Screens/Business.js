import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {services} from '../Services';
import {
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Spinner,
} from 'native-base';
import moment from 'moment';

const Business = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    services('business')
      .then(data => {
        setNews(data);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView height={850}>
        {news.length > 1 ? (
          <FlatList
            data={news}
            renderItem={({item}) => (
              <View>
                <View style={styles.newsContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.publishedAt).format('LLLL')}
                  </Text>
                  <Text style={styles.newsDescription}>{item.author}</Text>
                  <Text style={styles.newsDescription}>{item.url}</Text>
                </View>
                <Divider my={2} bg="#e0e0e0" />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.spinner}>
            <Spinner color="danger.400" size="lg" />
          </View>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Business;

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});
