import React from 'react'

const ServiceList = () => {
  const services = [
    { id: 1, name: 'Repair & Service', description: 'Get your machine repaired and serviced if needed.' },
    { id: 2, name: 'New Parts', description: 'Get new parts of your machine when damaged completely.' },
    { id: 3, name: 'Express Delivery', description: 'Fast delivery of releated products and accessories you need.' },
  ]

  return (
    <div className="service-list">
      {services.map(service => (
        <div key={service.id} className="service-item">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceList
