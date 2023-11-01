export default async (req, context) => {
  let apiKey = Netlify.env.get("API_KEY");
  return new Response(apiKey);
};
