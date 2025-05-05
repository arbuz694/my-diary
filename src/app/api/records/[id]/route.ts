import {NextRequest} from 'next/server';
import {ITEMS} from "@/app/items";

export async function GET(
    request: NextRequest,
    {params}: { params: Promise<{ id: number }> },
) {
    const { id } = await params;

    const item = ITEMS.find(item => item.id == id);

    return new Response(JSON.stringify(item), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    });
}