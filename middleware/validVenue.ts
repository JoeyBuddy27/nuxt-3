import { venueStore } from '../store/store' // Assuming the path to your venues store is '@/store/venues'

const checkVenueIsValid = (venueId: string) => {
    const venues = venueStore().venues
    console.log('checkVenueIsValid', venues, venueId)
   // Assuming you have a getter named 'getVenues' in your venues store

    return venues.includes(venueId)

}

export default defineNuxtRouteMiddleware((to, from) => {
    const venueId = to.params.id // Assuming the venueId is passed as a parameter named 'id'

    if (!checkVenueIsValid(venueId || '')) {
        return navigateTo('')
    }
})

