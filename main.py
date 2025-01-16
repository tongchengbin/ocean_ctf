from app import create_app
from app.extensions import socketio

app = create_app()


def main():
    for uri in app.url_map.iter_rules():
        print(uri)
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)


if __name__ == "__main__":
    main()

