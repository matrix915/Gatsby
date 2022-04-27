import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { submitForm } from "../../functions/submit-form"

const RequestForm = ({ formFieldGroups, id }) => {
  const [form, setform] = useState({})

  const [error, setError] = useState({})

  const getFields = () => {
    return Object.keys(form).map(key => {
      return {
        name: key,
        value: form[key],
      }
    })
  }

  const submitFormData = async e => {
    e.preventDefault()
    let _error = {}

    formFieldGroups.forEach(({ fields }) => {
      fields.forEach(field => {
        if (field.required === true) {
          if (form[field.name] === undefined || form[field.name] === "") {
            _error = {
              ..._error,
              [field.name]: `${field.label} is required`,
            }
          }
        }
      })
    })

    setError(_error)

    if (Object.keys(_error).length === 0) {
      let data = await submitForm(id, getFields(), Date.now(), true)
      if (data.inlineMessage) {
        console.log(data.inlineMessage)
      } else {
        if (typeof window != "undefined") {
          navigate("/success")
          window.open(data.redirectUri, "_blank")
          console.log("File has been opened on new tab")
        }
      }
    }
  }

  const handleFieldChange = e => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const initialFormValues = {}
    formFieldGroups.map(({ fields }) =>
      fields.forEach(field => {
        initialFormValues[field.name] = ""
      })
    )

    setform(initialFormValues)
  }, [])

  return (
    <div className="bg-ProjectBlack rounded-sm w-full mx-auto px-5 md:px-10 py-[42px] min-h-[800px]">
      <form onSubmit={submitFormData}>
        {formFieldGroups.map(({ fields }, index) => {
          return (
            <div className="w-full" key={index}>
              <div
                className={
                  fields.length > 1
                    ? "flex items-center justify-between mx-auto flex-col md:flex-row"
                    : ""
                }
              >
                {fields.map(
                  ({
                    label,
                    placeholder,
                    fieldType,
                    required,
                    name,
                    options,
                  }) => (
                    <label
                      htmlFor={name}
                      className={`block text-black font-robotoMono font-bold uppercase text-sm mb-10 tracking-wider  ${
                        fields.length > 1 && "w-full md:w-1/2 md:first:mr-5"
                      }`}
                      key={name}
                    >
                      {`${label}${required ? "*" : ""}`}
                      {fieldType === "text" && (
                        <>
                          <input
                            type={fieldType}
                            name={name}
                            onChange={handleFieldChange}
                            placeholder={placeholder}
                            className={`block border-2 border-transparent focus:border-2 focus:border-ProjectBlue bg-[#0000000D] w-full h-[50px] px-[15px] text-base font-normal mt-[10px] font-workSans rounded-sm ${
                              Object.keys(error).find(key => key === name) &&
                              error[
                                Object.keys(error).find(key => key === name)
                              ] !== "" &&
                              "bg-[#FFE8F0]"
                            }`}
                            id={name}
                            onBlur={() => {
                              if (label.toLowerCase() === "work email") {
                                if (
                                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    form[name]
                                  ) &&
                                  form[name] !== ""
                                ) {
                                  setError({
                                    ...error,
                                    [name]: "Please enter a valid email",
                                  })
                                } else if (form[name] === "") {
                                  setError({
                                    ...error,
                                    [name]: `${label} is required`,
                                  })
                                } else {
                                  setError({
                                    ...error,
                                    [name]: "",
                                  })
                                }
                              }
                            }}
                          />
                          {Object.keys(error).find(key => key === name) && (
                            <p className="font-workSans font-normal text-[13px] text-[#FF0057] mt-[7px] cursor-text normal-case">
                              {error[name]}
                            </p>
                          )}
                        </>
                      )}
                      {fieldType === "textarea" && (
                        <>
                          <textarea
                            placeholder={placeholder}
                            className={`block border-2 border-transparent  focus:border-2 focus:border-ProjectBlue bg-[#0000000D] w-full h-[120px] px-[15px] text-base font-normal mt-[10px] font-workSans resize-y rounded-sm py-2 ${
                              Object.keys(error).find(key => key === name) &&
                              "bg-[#FFE8F0]"
                            }`}
                            type={fieldType}
                            name={name}
                            required={required}
                            onChange={handleFieldChange}
                            id={name}
                          ></textarea>
                          {Object.keys(error).find(key => key === name) && (
                            <p className="font-workSans font-normal text-[13px] text-[#FF0057] mt-[7px] cursor-text">
                              {error[name]}
                            </p>
                          )}
                        </>
                      )}
                      {fieldType === "select" && (
                        /* eslint-disable-next-line */
                        <>
                          <select
                            placeholder={placeholder}
                            className={`block focus:border-2 focus:border-ProjectBlue bg-[#0000000D] w-full h-[50px] px-[15px] text-base font-normal mt-[10px] font-workSans rounded-sm ${
                              Object.keys(error).find(key => key === name) &&
                              "bg-[#FFE8F0]"
                            }`}
                            name={name}
                            required={required}
                            onChange={handleFieldChange}
                          >
                            {options.map(option => (
                              <option value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {Object.keys(error).find(key => key === name) && (
                            <p className="font-workSans font-normal text-[13px] text-[#FF0057] mt-[7px] cursor-text">
                              {error[name]}
                            </p>
                          )}
                        </>
                      )}
                    </label>
                  )
                )}
              </div>
            </div>
          )
        })}
        <div className="w-[150px] ">
          <button
            className="bg-ProjectBlue border-ProjectBlue h-[50px] text-ProjectBlack hover:text-ProjectBlue hover:bg-transparent transition duration-300 ease-in-out font-normal text-center uppercase border-2 rounded-sm font-workSans w-full text-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default RequestForm
