import { useEffect, useState } from 'react';

const ServiceRequestForm = ({ serviceType, data }: {serviceType: string, data: any}) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState({});
  const [formConfig, setFormConfig] = useState(data);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...formData, service: serviceType}),
    });

    const data = await res.json();

    if (data) {
      setResponse(data);
      setSubmitted(true);
    }
  };

  const handleMouseMove = (e: any) => {
    // for(const card of typeof document !== 'undefined' && document.getElementsByClassName("card")) {
    const card = e.target
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    // };
  }

  if (submitted) {
    return <p className={`pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 m-10 ${(response as any).error && 'lg:border-red-500'}`}>{(response as any)?.message ? (response as any)?.message : (response as any)?.error }</p>;
  }

  return (
    <div>
        <h2 className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 m-10'>Get in touch</h2>
        <form onSubmit={handleSubmit} className="form-container">
        {formConfig.map((field) => (
            <div key={field.name} className="input-container">
            <label>
                {field.label}
                {field.type === 'textarea' ? (
                <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="input-field"
                />
                ) : (
                field.type === 'select' ? (
                    <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="input-field"
                    >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                    </select>
                ) : (
                    <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="input-field"
                    />
                )
                )}
            </label>
            </div>
        ))}
        <button type="submit" className="submit-button glow-container rounded-lg border px-5 py-4 m-2 backdrop-blur-2xl border-neutral-700 bg-neutral-800/30" onMouseMove={handleMouseMove}><div className="glow-content">
          Submit</div></button>
        </form>
    </div>
  );
};

export default ServiceRequestForm;
