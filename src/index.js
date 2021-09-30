
function isa(type, value, strict = true)
{
    type = type.toLowerCase().trim();

    switch(type)
    {
        case 'string':
            return isaString(value);
        case 'number':
            return isaNumber(value);
        case 'truthy':
            return isaTruthy(value);
        case 'falsy':
            return isaFalsy(value);
        case 'email':
            return isaEmail(value);
        case 'phone':
            return isaPhone(value);
        case 'url':
            return isaUrl(value);
        case 'domain':
            return isaDomain(value, strict);
        default:
            return false;
    }
}

function isaNumber(value)
{
    return typeof value === 'number';
}

function isaString(value)
{
    return typeof value === 'string';
}

function isaTruthy(value)
{
    return value ? true : false;
}

function isaFalsy(value)
{
    return ! value ? true : false;
}

function isaEmail(value)
{
    return /^[A-z0-9\.\-_+$]+@[A-z0-9\.\-_+$]+\.[A-z0-9]{2,10}$/.test(value);
}

function isaPhone(value)
{
    return /^(\+[0-9]{1,3})?([ \.\-])?(0-9){3}([ \.\-])?(0-9){3}([ \.\-])(0-9){4}$/.test(value);
}

function isaUrl(value)
{
    return /^http(s)?:\/\/[A-z0-9\.\-\_]+\.[A-z]{2,16}(.*)?$/i.test(value);
}

function isaDomain(value, strict)
{
    if( strict ){
        return /^[a-z0-9\.\-]+\.[a-z]{2,16}$/.test(value);
    }

    return /^[A-z0-9\.\-]+\.[A-z]{2,16}$/i.test(value);
}

module.exports = {
    isa: isa
}