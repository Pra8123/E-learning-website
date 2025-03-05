import Accordion from 'react-bootstrap/Accordion';
import './Accordian.css';
function Accordian() {
    return (
        <>
            <h3 className='acco'>Frequently asked questions</h3>
            <div className='accordian'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Can I try the platform for free?</Accordion.Header>
                        <Accordion.Body>
                        Yes, our platform offers a free trial period for new users. During this period, you can explore our courses, resources, and tools to see if it fits your learning goals.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What types of courses are available?</Accordion.Header>
                        <Accordion.Body>
                        We offer a variety of courses, including programming, data science, business management, creative skills, and personal development. All courses are created by industry experts and top educators.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is there support if I have questions?</Accordion.Header>
                        <Accordion.Body>
                        Yes, we offer 24/7 customer support and community forums where you can ask questions and connect with other learners.                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do I receive a certificate after completing a course?</Accordion.Header>
                        <Accordion.Body>
                        Yes, upon successfully completing a course, you will receive a sharable certificate that you can add to your LinkedIn profile or resume.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default Accordian;