import Snackbar from "react-native-snackbar";
import { palette } from "../theme/palette";
import { Auth } from "aws-amplify";

export const showSnackbar = async (text: string, type: string) => {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: type === 'error' ? palette.danger : palette.primaryDark,
    });
};

export function getUTCDate() {
    var d = new Date();
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds())
}

//Add product to cart
export const addProductToCart = (prodObj: any) => {
    let orderDetails = {
        numbers: prodObj.numbers,
        cart: prodObj.cart,
        cartPrice: prodObj.cartPrice,
        categoryId: prodObj.categoryId,
        inventoryManage: prodObj.inventoryManage,
        brandId: prodObj.brandId,
        productId: prodObj.productId,
        subCategoryId: prodObj.subCategoryId,
        sellingPrice: prodObj.sellingPrice,
        quantity: prodObj.quantity,
        priceIncludeTax: prodObj.priceIncludeTax,
        notes: prodObj.notes,
        storeId: prodObj.storeId,
        productName: prodObj.productName,
        taxes: prodObj.taxes,
        discounts: prodObj.discounts,
        unitName: prodObj.unitName,
        isMeasurable: prodObj.isMeasurable,
        imageId: prodObj.imageId,
        imageUrl: prodObj.imageUrl,
        itemDiscount: prodObj.discounts,
        itemTax: prodObj.taxes,
        orderQuantity: "1",
        stock: 1,
    };

    let cartObj = {
        productId: prodObj.productId,
        productName: prodObj.productName,
        prodQuantity: "1",
        prodObj: orderDetails,
    }
    return cartObj
}


export const handleCognitoError = (error: any) => {
    if (error.code === 'UsernameExistsException') {
        return 'An account with the given username already exists.';
    } else if (error.code === 'UserNotFoundException') {
        return 'User does not exist.';
    } else if (error.code === 'UserNotConfirmedException') {
        return 'User is not confirmed.';
    } else if (error.code === 'CodeMismatchException') {
        return 'Invalid code';
    } else if (error.code === 'ExpiredCodeException') {
        return 'The code has expired.';
    } else if (error.code === 'AliasExistsException') {
        return 'An account with the given email/phone number already exists.';
    } else if (error.code === 'InvalidPasswordException') {
        return 'Password does not conform to policy.';
    } else if (error.code === 'NotAuthorizedException') {
        return 'Incorrect username or password.';
    } else if (error.code === 'LimitExceededException') {
        return 'Limit exceeded.';
    } else if (error.code === 'InternalErrorException') {
        return 'Internal error.';
    } else if (error.code === 'UserLambdaValidationException') {
        return 'User validation failed.';
    } else if (error.code === 'UserPasswordValidationException') {
        return 'Password validation failed.';
    } else if (error.code === 'ResourceNotFoundException') {
        return 'Resource not found.';
    } else if (error.code === 'TooManyRequestsException') {
        return 'Too many requests.';
    } else {
        return 'Something went wrong';
    }
};