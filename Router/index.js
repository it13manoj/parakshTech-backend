const express =  require('express');
const Routes = express();
const userRoute = require('./User')
const homeRoute = require('./Home')
const AboutRoute = require('./About')
const ServicesRoute = require('./Services')
const ContactsRoute = require('./Contacts')
const FaqsRoute = require('./Faqs')
const SocialsRoute = require('./Socials')
const TestimonialRoute = require('./Testimonial')
const FeaturesRoute = require('./Features')

Routes.use("/api",userRoute)
Routes.use("/api",homeRoute)
Routes.use("/api",AboutRoute)
Routes.use("/api",ServicesRoute)
// Routes.use("/api",ContactsRoute)
Routes.use("/api",FaqsRoute)
Routes.use("/api",ServicesRoute)
Routes.use("/api",SocialsRoute)
Routes.use("/api",FeaturesRoute)
Routes.use("/api",TestimonialRoute)

module.exports = Routes