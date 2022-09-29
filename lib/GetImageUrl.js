export default function getImageUrl(collectionId, imgId) {
  if (collectionId && imgId) {
    return `${process.env.DB_URL}/api/files/categories/${collectionId}/${imgId}`;
  }
  return "https://media.tenor.com/YAs3DgW0dbMAAAAC/loading-loader.gif";
}
