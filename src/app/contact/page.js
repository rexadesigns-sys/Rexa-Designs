"use client";

import { useState, useRef } from 'react';
import ContactPage from '../../component/contact/ContactPage';

const ownerEmail = 'rexadesigns@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    services: [],
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [attachedFileName, setAttachedFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const currentServices = [...prev.services];

      if (currentServices.includes(service)) {
        return {
          ...prev,
          services: currentServices.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          services: [...currentServices, service]
        };
      }
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFileName(e.target.files[0].name);
    } else {
      setAttachedFileName('No file chosen');
    }
  };

  const triggerFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    const contactForm = new FormData();
    contactForm.append('_subject', `New Rexa Designs contact: ${formData.subject}`);
    contactForm.append('_template', 'table');
    contactForm.append('First Name', formData.firstName);
    contactForm.append('Last Name', formData.lastName);
    contactForm.append('Email', formData.email);
    contactForm.append('Phone', formData.phone || 'Not provided');
    contactForm.append('Subject', formData.subject);
    contactForm.append(
      'Services Interested In',
      formData.services.length ? formData.services.join(', ') : 'Not selected'
    );
    contactForm.append('Message', formData.message);

    if (fileInputRef.current?.files?.[0]) {
      contactForm.append('attachment', fileInputRef.current.files[0]);
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ownerEmail}`, {
        method: 'POST',
        body: contactForm,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Message delivery failed');
      }

      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        services: [],
        message: ''
      });
      setAttachedFileName('No file chosen');

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <ContactPage
      formData={formData}
      formStatus={formStatus}
      ownerEmail={ownerEmail}
      attachedFileName={attachedFileName}
      fileInputRef={fileInputRef}
      handleInputChange={handleInputChange}
      handleCheckboxChange={handleCheckboxChange}
      handleFileChange={handleFileChange}
      triggerFilePicker={triggerFilePicker}
      handleSubmit={handleSubmit}
      setFormStatus={setFormStatus}
    />
  );
}
