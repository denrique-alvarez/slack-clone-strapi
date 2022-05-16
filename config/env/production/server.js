module.exports = ({ env }) => ({
  proxy: true,
  url: env('postgres://xmorqzoqfjntwl:e25e59d300ab7d75f49dbc96d850606095dbf6ae2123be09870eedeb9a88f3ad@ec2-52-18-116-67.eu-west-1.compute.amazonaws.com:5432/d7asl7i4n8g41o'),
  app: { 
    keys: env.array('APP_KEYS')
  },
})