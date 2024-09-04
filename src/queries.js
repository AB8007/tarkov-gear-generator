import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query {
    primaries: items(
      categoryNames: [
        AssaultRifle
        AssaultCarbine
        Machinegun
        SMG
        Shotgun
        SniperRifle
        MarksmanRifle
      ]
      name: "Default"
    ) {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    secondaries: items(categoryNames: [Handgun, Revolver], name: "Default") {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    headwear: items(categoryNames: Headwear) {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    bodyarmors: items(categoryNames: Armor, name: "Default") {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    headphones: items(categoryNames: Headphones) {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    chestrigs: items(categoryNames: ChestRig) {
      name
      image512pxLink
      properties {
        __typename
      }
      shortName
    }
    maps {
      name
    }
  }
`;
