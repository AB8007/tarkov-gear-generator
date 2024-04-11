import { gql } from '@apollo/client'

const ALL_HANDGUNS = gql`
  query {
    items(categoryNames: Handgun) {
      shortName
      id
      name
      gridImageLink
   } 
  }
`
const ALL_HEADWEAR = gql`
  query {
   items(categoryNames: Headwear) {
      gridImageLink
      name
      properties {__typename}
   }
  }
`



export {ALL_HANDGUNS, ALL_HEADWEAR}