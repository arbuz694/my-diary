import {ITEMS} from "@/app/items";

export async function GET() {
    // For example, fetch data from your DB here
    return new Response(JSON.stringify(ITEMS), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}

export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();

    const {title, text, date} = body;

    // e.g. Insert new user into your DB
    const item = {id: ITEMS.length + 1, title, text, date};

    console.log('push', item);

    ITEMS.push(item);

    return new Response(JSON.stringify(item), {
        status: 201,
        headers: {'Content-Type': 'application/json'}
    });
}