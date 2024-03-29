#!/usr/bin/env python

import asyncio
import websockets

connected =set()

async def server(websocket, path):
    #Register
    connected.add(websocket)
    try:
        #Implement logic here
        async for message in websocket:
            for conn in connected:
                if conn!=websocket:
                    await conn.send(message)
    finally:
        # Unregister
        connected.remove(websocket)

start_server = websockets.serve(server, 'localhost', 5002)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()