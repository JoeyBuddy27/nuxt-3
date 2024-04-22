import { defineStore } from 'pinia'

export const venueStore = defineStore('venues', {
    state: () => ({
        venues: ['the-belfry', 'sawgrass', 'pebble-beach'],
    }),
    // actions: {
    //     async fetchVenues() {
    //     const response = await fetch('https://api.example.com/venues')
    //     this.venues = await response.json()
    //     },
    // },
})