import { useState } from "react";
import { formatCurrency } from "utils/functions";
import { AnimatePresence } from "framer-motion";
import Table from "components/Table";
import SearchBar from "components/SearchBar";
import Button from "components/Button";
import AddProduct from "./components/AddModal";

const Products = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <AnimatePresence>
        {showAddModal && (
          <AddProduct
            onClose={() => setShowAddModal(false)}
            // fetch={handleFetchCategories}
          />
        )}
      </AnimatePresence>
      <div className="flex bg-white py-[0.8125rem] px-[1.875rem] items-center justify-between">
        <h3 className="font-[600] text-[1.375em] text-black mr-[3.25rem]">
          PRODUCTS
        </h3>
        <SearchBar />
        <Button value="Add Product" onClick={() => setShowAddModal(true)} />
      </div>
      <div className="mt-[2.6875rem] min-h-[58vh] px-[1.3125rem]">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>PRODUCT ID</Table.Th>
              <Table.Th>PRODUCT NAME</Table.Th>
              <Table.Th>CATEGORY</Table.Th>
              <Table.Th>PRICE</Table.Th>
              <div className="w-[2.125rem]" />
            </Table.Tr>
          </Table.Thead>

          <Table.TBody>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
            <Table.Tr key={1}>
              <Table.Td> #124562</Table.Td> <Table.Td>Channel Bag</Table.Td>
              <Table.Td>Bags</Table.Td>
              <Table.Td>{formatCurrency(20000)}</Table.Td>
              {/* <Table.Td>
              <MenuBtn />
            </Table.Td> */}
            </Table.Tr>
          </Table.TBody>
        </Table>
      </div>
    </>
  );
};

export default Products;
