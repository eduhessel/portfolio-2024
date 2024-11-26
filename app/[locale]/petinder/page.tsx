import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Petinder(){
    return(
        <>
        <main>
            <div className="flex flex-col mt-4">
                <div className="containerContent flex flex-col">
                    <h1>Petinder</h1>
                    <Image src={"/petinder.png"} width={1400} height={9000} alt="Imagem projeto Petinder" />
                </div>
            </div>
        </main>
        </>
    )
}