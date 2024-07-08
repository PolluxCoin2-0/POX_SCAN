

// export const timeStampConverter = () => {
//   const convertTimestamp = (unixTimestamp) => {
//     const date = new Date(unixTimestamp);

//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     const hours = date.getHours();
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

//     return `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
//   };

//   const unixTimestamp = 1713529800000;
// //   const formattedDate = convertTimestamp(unixTimestamp);

//   return (
//     <div>
//       <h1>Converted Timestamp</h1>
      
//     </div> 
//   )
// };

// {/* // ReactDOM.render(<TimestampConverter />, document.getElementById('root')); */}