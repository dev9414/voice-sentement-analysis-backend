import paralleldots
import speech_recognition as sr
import sys
apikey='replace_this_text_with_paralleldots_api_key'
r = sr.Recognizer()
with sr.Microphone() as source:
    audio_text = r.listen(source)
paralleldots.set_api_key(apikey)
paralleldots.get_api_key()
lang_code="en"
tt=(r.recognize_google(audio_text))
response=paralleldots.sentiment(r.recognize_google(audio_text),lang_code)
print(response)
#print(tt)