export const formatTimestampOnlyDate = (timestamp) => {
    let date;

    if (typeof timestamp === 'string') {
        date = new Date(timestamp);
    } else if (typeof timestamp === 'number') {
        date = new Date(timestamp);
    } else {
        throw new Error('Invalid timestamp format');
    }

    return date.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });
};