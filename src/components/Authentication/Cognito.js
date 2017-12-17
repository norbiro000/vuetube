import Promise from 'bluebird'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import CognitoConfig from '../../../build/cognito-config'

function getUserPool () {
  let poolData = {
    UserPoolId: CognitoConfig.UserPoolId,
    ClientId: CognitoConfig.ClientId
  }
  return new CognitoUserPool(poolData)
}

function setAttributeList (userInfo) {
  // Only Add Email
  let attributeList = []
  let dataEmail = {
    Name: 'email',
    Value: userInfo.email
  }
  let attributeEmail = new CognitoUserAttribute(dataEmail)
  attributeList.push(attributeEmail)
  return attributeList
}

export const CognitoRegister = function (userInfo) {
  return new Promise((resolve, reject) => {
    let userPool = getUserPool()
    let attributeList = setAttributeList(userInfo)

    userPool.signUp(userInfo.username, userInfo.password, attributeList, null, function (err, result) {
      if (err) {
        return reject(err)
      } else {
        let cognitoUser = result.user
        return resolve(cognitoUser.getUsername())
      }
    })
  })
}
