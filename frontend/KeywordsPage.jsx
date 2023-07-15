import { useCallback, useState } from "react";
import { useFindFirst, useFindMany, useAction } from "@gadgetinc/react";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  Banner,
  Button,
  LegacyCard,
  Form,
  FormLayout,
  Layout,
  Page,
  Spinner,
  LegacyStack,
  Tag,
  TextField,
} from "@shopify/polaris";
import { api } from "./api";

const PageLayout = ({ children }) => {
  return <Page title="Keyword manager">{children}</Page>;
};

const KeywordsPage = () => {
  const [keyword, setKeyword] = useState("");

  const [createTagResponse, createTag] = useAction(api.allowedTag.create);
  const [_, deleteTag] = useAction(api.allowedTag.delete);
  const [allowedTagResponse] = useFindMany(api.allowedTag);
  const [shopResponse] = useFindFirst(api.shopifyShop, {
    select: { id: true },
  });

  const handleSubmit = useCallback(async () => {
    await createTag({
      allowedTag: {
        keyword,
        shop: {
          _link: shopResponse.data?.id,
        },
      },
    });
    setKeyword("");
  }, [keyword, createTag, shopResponse]);

  const removeTag = useCallback(
    async (id) => {
      await deleteTag({ id });
    },
    [deleteTag]
  );

  if (shopResponse.error) {
    return (
      <PageLayout>
        <Text variant="bodyMd" as="p">
          Error: {shopResponse.error.toString()}
        </Text>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {shopResponse.fetching ? (
        <Spinner accessibilityLabel="Spinner example" size="large" />
      ) : (
        <>
          <Layout>
            <Layout.Section>
              <TitleBar title="Manage keywords" />
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                  {createTagResponse.error && (
                    <Banner status="critical">
                      <pre>
                        <code>{createTagResponse.error.toString()}</code>
                      </pre>
                    </Banner>
                  )}
                  <LegacyStack alignment="center">
                    <LegacyStack.Item fill>
                      <TextField
                        value={keyword}
                        onChange={setKeyword}
                        label="Tag"
                        type="text"
                        autoComplete="tag"
                        helpText={<span>Add a keyword</span>}
                        disabled={createTagResponse.fetching}
                      />
                    </LegacyStack.Item>
                    <Button
                      primary
                      submit
                      disabled={createTagResponse.fetching}
                    >
                      Add keyword
                    </Button>
                  </LegacyStack>
                </FormLayout>
              </Form>
            </Layout.Section>
            <Layout.Section>
              <LegacyCard title="Existing keywords" sectioned>
                <LegacyStack>
                  {allowedTagResponse.fetching && <Spinner />}
                  {allowedTagResponse.data?.map((allowedTag, i) => (
                    <Tag key={i} onRemove={() => removeTag(allowedTag.id)}>
                      {allowedTag.keyword}
                    </Tag>
                  ))}
                  {allowedTagResponse.data?.length === 0 && (
                    <p>No keywords added</p>
                  )}
                </LegacyStack>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </>
      )}
    </PageLayout>
  );
};

export default KeywordsPage;
