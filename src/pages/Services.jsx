import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, additions, and residential developments built to the highest standards.',
      features: ['Custom Home Design', 'Room Additions', 'Kitchen & Bath Remodeling', 'Basement Finishing'],
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial developments for businesses.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Restaurant Build-outs'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      features: ['Whole Home Renovations', 'Kitchen Remodeling', 'Bathroom Upgrades', 'Exterior Improvements'],
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Concrete & Foundation',
      description: 'Solid foundations and concrete work that stands the test of time.',
      features: ['Foundation Pouring', 'Concrete Driveways', 'Sidewalks & Patios', 'Structural Concrete'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Roofing Services',
      description: 'Professional roofing installation, repair, and maintenance services.',
      features: ['New Roof Installation', 'Roof Repairs', 'Gutter Installation', 'Roof Inspections'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Electrical & Plumbing',
      description: 'Complete electrical and plumbing services for all construction projects.',
      features: ['Electrical Installation', 'Plumbing Systems', 'HVAC Installation', 'System Maintenance'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your vision, requirements, and budget.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs for your project.'
    },
    {
      step: '03',
      title: 'Construction',
      description: 'We begin construction with regular updates and quality checkpoints.'
    },
    {
      step: '04',
      title: 'Completion',
      description: 'Final walkthrough and handover of your completed project.'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Construction Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
