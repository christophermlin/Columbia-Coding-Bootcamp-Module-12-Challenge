import React, { useState } from 'react';

const initialState = { name: '', email: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});

  const validate = (field: string, value: string) => {
    if (!value) return 'This field is required';
    if (field === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Invalid email address';
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [k: string]: string } = {};
    Object.entries(form).forEach(([k, v]) => {
      const err = validate(k, v);
      if (err) newErrors[k] = err;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(newErrors).length === 0) {
      alert('Message sent!');
      setForm(initialState);
      setTouched({});
    }
  };

  return (
    <section aria-labelledby="contact-heading">
      <div className="section-content">
        <h2 id="contact-heading">Contact</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.name}
              required
            />
            {touched.name && errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              required
            />
            {touched.email && errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.message}
              required
            />
            {touched.message && errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
