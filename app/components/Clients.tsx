import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Client = {
  logo: string | StaticImport;
  id: string;
  // other properties...
};

const localClients: Client[] = [
  // ...client data...
];

const Clients = () => {
  return (
    <section className="flexCenter my-4">
      <div className="flexCenter flex-wrap w-full">
        {localClients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flexCenter sm:min-w-[192px] min-w-[120px]"
          >
            <Image
              src={client.logo}
              alt="client"
              width={0}
              height={0}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
