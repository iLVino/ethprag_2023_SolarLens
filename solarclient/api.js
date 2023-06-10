import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
//import { createClient } from 'urql'

const API_URL = 'https://api-mumbai.lens.dev'

// export const client = new createClient({
//   url: API_URL
// })

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

export const challenge = gql`
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`

export const authenticate = gql`
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`

export const getMyDefaultProfile = gql`
query DefaultProfile {
    defaultProfile(request: { ethereumAddress: "0xf9B888aA7CDBD123FA59571a19449C85017ca833"}) {
      id
      name
      bio
      isDefault
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      handle
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          chainId
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          chainId
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          contractAddress
          amount {
            asset {
              name
              symbol
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
         type
        }
        ... on RevertFollowModuleSettings {
         type
        }
      }
    }
  }
`

export const CreatePostTypedData  = gql`mutation CreatePostTypedData {
    createPostTypedData(request: {
      profileId: "0x03",
      contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl",
      collectModule: {
        revertCollectModule: true
      },
      referenceModule: {
        followerOnlyReferenceModule: false
      }
    }) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }`

  export const recommendProfiles = `
  query RecommendedProfiles {
    recommendedProfiles {
        id
        name
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        handle
        stats {
          totalFollowers
        }
    }
  }
`
