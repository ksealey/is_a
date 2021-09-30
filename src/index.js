
function is_a(type, value, strict = true)
{
    type = type.toLowerCase().trim();

    switch(type)
    {
        case 'string':
            return isAString(value);
        case 'number':
            return isANumber(value);
        case 'truthy':
            return isATruthy(value);
        case 'falsy':
            return isAFalsy(value);
        case 'email':
            return isAEmail(value);
        case 'phone':
            return isAPhone(value);
        case 'url':
            return isAUrl(value);
        case 'domain':
            return isADomain(value, strict);
        case 'strong_password':
            return isAStrongPassword(value);
        default:
            return false;
    }
}

function isANumber(value)
{
    return typeof value === 'number' && ! isNaN(value);
}

function isAString(value)
{
    return typeof value === 'string';
}

function isATruthy(value)
{
    return value ? true : false;
}

function isAFalsy(value)
{
    return ! value ? true : false;
}

function isAEmail(value)
{
    return /^[A-z0-9\.\-_+$]+@[A-z0-9\.\-_+$]+\.[A-z0-9]{2,10}$/.test(value);
}

function isAPhone(value)
{
    return /^(\+[0-9]{1,3})?([ \.\-])?(0-9){3}([ \.\-])?(0-9){3}([ \.\-])(0-9){4}$/.test(value);
}

function isAUrl(value)
{
    return /^http(s)?:\/\/[A-z0-9\.\-\_]+\.[A-z]{2,16}(.*)?$/i.test(value);
}

function isADomain(value, strict)
{
    if( strict ){
        return /^[a-z0-9\.\-]+\.[a-z]{2,16}$/.test(value);
    }

    return /^[A-z0-9\.\-]+\.[A-z]{2,16}$/i.test(value);
}

function isAStrongPassword(value)
{
    if( value.length < 8 ){
        return false;
    }

    if( ! /[0-9]/.test(value) ){
        return false;
    }

    if( ! /[A-Z]/.test(value) ){
        return false;
    }

    if( ! /[a-z]/.test(value) ){
        return false;
    }

    if( ! /[^0-9A-z]/.test(value) ){
        return false;
    }

    return true;
}

is_a.default = is_a;

module.exports = is_a;