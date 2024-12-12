'use client';
import Navbar from "@/common/components/Navbar";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useParams } from "next/navigation";

export default function page() {

const params = useParams<{query: string}>();
const query = params?.query ? decodeURIComponent(params.query) : "";

  return (
    
    <div>
      <Navbar />
      <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Results */}
      <Products query={query} />  

  </div>

    </div>
  )
}
