
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
            return isAEmail(value + '');
        case 'email_character':
            return isAEmailCharacter(value + '');
        case 'phone':
            return isAPhone(value + '');
        case 'url':
            return isAUrl(value + '');
        case 'domain':
            return isADomain(value + '', strict);
        case 'domain_character':
            return isADomainCharacter(value+ '');
        case 'strong_password':
            return isAStrongPassword(value + '');
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
    return /^[0-9A-Za-z]([A-Za-z0-9\.\_]{1,64})?[0-9A-Za-z]@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,16}$/.test(value) 
         && value.indexOf('..') === -1
         && value.indexOf('__') === -1
         && value.indexOf('--') === -1
}

function isAEmailCharacter(value)
{
    if(! value || value.length != 1){
        return false;
    }

    return /^[A-Za-z0-9\.\_@]$/.test(value);
}

function isAPhone(value)
{
    return /^(\+[0-9]{1,3})?([^0-9])?(\()?[0-9]{3}(\))?([^0-9])?[0-9]{3}([^0-9])?[0-9]{4}$/.test(value);
}

function isAUrl(value)
{
    const passes =  /^http(s)?:\/\/[A-Za-z0-9]([A-Za-z0-9\.\-]+)?[A-Za-z0-9]\.[A-Za-z]{2,16}(\/)?(\?)?(.*)$/i.test(value);
    if(!passes){
        return false;
    }

    const front = value.match(/^(http(s)?:\/\/[A-Za-z0-9]([A-Za-z0-9\.\-]+)?[A-Za-z0-9]\.[A-Za-z]{2,16})/i)[0];

    return front.indexOf('..') === -1
        && front.indexOf('--') === -1;
}

function isADomain(value)
{
    return /^[A-Za-z0-9][A-Za-z0-9\.\-]+[A-Za-z0-9]\.[A-Za-z]{2,16}$/i.test(value)
        && value.indexOf('..') === -1
        && value.indexOf('--') === -1;
}

function isADomainCharacter(value)
{
    return /^[A-Za-z0-9\-\.]{1}$/i.test(value);
}

function isAStrongPassword(value)
{
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
}

is_a.default = is_a;

module.exports = is_a;