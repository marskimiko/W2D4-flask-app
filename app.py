from flask import Flask, render_template
app = Flask(__name__)

 

@app.route('/')
def home():
  return render_template('index.html')

 
@app.route('/nature')
def nature_info():
  return render_template('nature.html')

 

@app.route('/cooking')
def cooking_info():
  return render_template('cooking.html')

 

@app.route('/music')
def music_info():
  return render_template('music.html')

 

if __name__ == '__main__':
  app.run(debug=True)

