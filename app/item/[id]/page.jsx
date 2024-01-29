import ItemModal from "@/components/ItemModal/ItemModal";
import { notFound } from 'next/navigation'

async function getData(id) {
  const response = await fetch(
    `https://taxivoshod.ru/testapi/?w=item&id=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
    if (!response.ok) notFound();
  return response.json();
}

export default async function Post({ params: { id } }) {
  const item = await getData(id);
  return (
   <ItemModal
    item={item}
   />
  );
}
