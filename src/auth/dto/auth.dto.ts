import { IsEmail, IsEthereumAddress, IsNotEmpty, IsStrongPassword } from "class-validator";
// import {PublicKey} from '@solana/web3.js'
//
// function validateSolAddress(address:string){
//   try {
//     let pubkey = new PublicKey(address)
//     let  isSolana =  PublicKey.isOnCurve(pubkey.toBuffer())
//     return isSolana
//   } catch (error) {
//     return false
//   }
export class AuthDto {
  // @IsEthereumAddress()
  @IsNotEmpty()
  wallet: string
}
