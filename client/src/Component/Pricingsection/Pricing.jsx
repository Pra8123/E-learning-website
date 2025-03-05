import React from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';
function Pricing() {
    return (
        <div className="app-container">

            <section className="pricing">
                <h2>Choose Your Plan</h2>
                <div className="pricing-grid">
                    {[
                        { title: "Basic", price: "$29/month", features: ["Access to 100+ courses", "Basic exercises", "Community support", "1 Certificate"] },
                        { title: "Pro", price: "$49/month", features: ["Access to all courses", "Advanced exercises", "Priority support", "5 Certificates", "Project reviews"], popular: true },
                        { title: "Enterprise", price: "$99/month", features: ["Everything in Pro", "Team management", "Custom learning paths", "API access", "Dedicated support"] },
                    ].map((plan, index) => (
                        <div key={index} className={`pricing-item ${plan.popular ? "popular" : ""}`}>
                            {plan.popular && <div className="popular-tag">Popular</div>}
                            <h3>{plan.title}</h3>
                            <p className="price">{plan.price}</p>
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}><i class="fa-solid fa-check"></i> {feature}</li>
                                ))}
                            </ul>
                            <button className="pricing-button">Get started</button>
                        </div>
                    ))}
                </div>
            </section>




            <section className="cta">
                <h2>Ready to Start Your Learning Journey?</h2>
                <p>Join thousands of successful students today</p>
                <button className="cta-button"><Link to="/Courses">Get started now</Link></button>
            </section>
        </div>
    );
}

export default Pricing;
