import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import { COLORS } from '../../constants'
import styles from '../../components/common/cards/nearby/nearbyjobcard.style'
import NearbyJobCard from '../../components/common/cards/nearby/NearbyJobCard'
import useFetch from '../../hook/useFetch'



const Search = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((tender)=>(
            <NearbyJobCard

              job = {tender}
              key={`nearby-job-${tender?.id}`}
              handleNavigate={()=> router.push(`job-details/${tender.id}`)}
            />
          ))
        )}

      </View>
    </View>
  )
}

export default Search;