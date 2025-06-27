// /** @type {import('next').NextConfig} */
// // next.config.js


// const nextConfig = {



// images: {
//   domains: ["https://furssati.io", "img.freepik.com"],
// },



// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'furssati.io',
      'img.freepik.com',
      'img.freepik.com', // تكرار احتياطي
    ],
  },
};

module.exports = nextConfig;


