import React from 'react'
import { useState } from 'react'
import {
   View,
    Text,
     TouchableOpacity,
      FLatList,
       ActivityIndicator
       } from 'react-native'

import { useRouter } from 'expo-router'

import {COLORS, SIZES} from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const router = useRouter();

  const qs = {
  }


  const { data, isLoading, error } = useFetch("/", qs)

  const handleCardPress =(item) =>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size = "large" colors = {COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) =>(
            <PopularJobCard
              item={item}
              handleCardPress={handleCardPress}
            />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal
          />
        )}

      </View>
    </View>
  )
}

export default Popularjobs