import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import {COLORS} from '../../../constants'
import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'


const handleNavigate = (()=>{

})

const NearbyJobs = () => {
  const router = useRouter();

  const qs = {
  }
  const { data, isLoading, error } = useFetch("/", qs)

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
          data?.map((job)=>(
            <NearbyJobCard

              job = {job}
              key={`nearby-job-${job?.id}`}
              handleNavigate={handleNavigate}
            />
          ))
        )}

      </View>
    </View>
  )
}

export default NearbyJobs;