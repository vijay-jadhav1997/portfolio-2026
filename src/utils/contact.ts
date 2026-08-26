import { toast } from "react-toastify"

export const sendEmail = (subject: string = 'Hello Vijay!', body: string = 'I came across your portfolio and would like to connect.') => {
  const email = 'vijay.jadhav1997.dev@gmail.com'
  
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  
  const mailtoUrl = isMobileDevice() 
    ? `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}` 
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`

  window.open(mailtoUrl, '_blank')
  
  // Fallback: Copy to clipboard if email doesn't open
  setTimeout(() => {
    const emailText = `To: ${email}\nSubject: ${subject}\n\n${body}`
    navigator.clipboard.writeText(emailText)
  }, 500)
}

export const isMobileDevice = (): boolean =>{
  return /Mobi|Android|iPhone/i.test(navigator.userAgent)
}

export const triggerPhoneCall = () => {
  const phoneNumber = '91 9112872176'
  const cleanNumber = phoneNumber.replace(/\D/g, '') // remove non-digits


  if (!isMobileDevice()) {
    confirm("You're not on mobile device. Lets connect with WhatsApp.")
    return openWhatsAppMessage(cleanNumber)
  }

  window.open(`tel:${cleanNumber}`, '_blank')
}

export const openWhatsAppMessage = ( phone = '919112872176', message='Hello Vijay! I came across your portfolio and would like to connect.') => {
  const encodedMessage = encodeURIComponent(message)
  const url = isMobileDevice() ? `whatsapp://send?phone=${phone}&text=${encodedMessage}` :  `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`

  try {
    window.open(url, '_blank')

    setTimeout(async () => {
      await navigator.clipboard.writeText(`Whats app number - ${phone}`)
      toast.info('⚠️ WhatsApp Desktop might not have opened. Contact info copied to clipboard!', {position: 'bottom-center'})
    }, 3000)
  } catch (error) {
    console.error('Error opening WhatsApp:', error)
    toast.error('❌ Unable to open WhatsApp. Please try later.', {position: 'bottom-center'})
  }
}